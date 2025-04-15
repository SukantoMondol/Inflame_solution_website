import cloudinary from 'cloudinary';
import { mongooseConnect } from '@/lib/mongoose';
import Multiparty from 'multiparty';
import { formToJSON } from 'axios';






cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,

})
export default async function handle(req, res) {
  //connect database
  await mongooseConnect();
  const form = new Multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    formToJSON.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files })
    })
  })
  const link = [];
  for (const file of files.file) {
    const result = await cloudinary.v2.uploader.upload(file.path, {
      folder: 'Inflame Solution Website',
      public_id: `file_${Data.now()}`,
      resource_type: 'auto'
    });
    const link = result.secure_url;
    link.push(link);
  }
  return res.json({ links });
}