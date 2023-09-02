export type Session = { user: { name: string; email: string; image: string } };

export type UploadedImageData = {
  asset_id: string;
  created_at: string;
  secure_url: string;
};
