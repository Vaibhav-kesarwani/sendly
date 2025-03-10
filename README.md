# Sendly - File Sharing Made Easy

Sendly is a fast and secure file-sharing platform that allows users to share files with multiple people seamlessly. Whether you're sending documents, images, or large files, Sendly makes it effortless with just a few clicks.

## Features

- **Easy File Sharing** - Upload and share files with multiple recipients effortlessly.
  
- **Secure Transfers** - End-to-end encryption ensures your files remain private and secure.
  
- **Multiple Recipients** - Send files to multiple people at once without hassle.
  
- **Expiration Links** - Set expiry times for shared links to ensure temporary access.
  
- **Drag & Drop Uploads** - Simplify file uploading with a user-friendly drag-and-drop interface.
  
- **Cross-Platform Access** - Works on desktop and mobile devices.

## Usage

1. Upload your file(s) using the intuitive UI.

2. Generate a unique shareable link.

3. Share the link with multiple recipients.

4. Recipients can download the file securely.

## Tech Stack

Sendly is built with the following technologies:

- **Frontend:** Next.js, TypeScript, Tailwind CSS

- **Backend:** Supabase Realtime, Prisma

- **File Uploads:** Uploadthing

- **Compression:** JsZip

- **Validation:** Zod

### Inorder to test the application locally:
1. Clone the repository: `git clone https://github.com/Vaibhav-kesarwani/sendly.git`
2. Install dependencies: `pnpm install`
3. Set Environment Variables:
     ```
     UPLOADTHING_APP_ID="your_uploadthing_app_id"
     UPLOADTHING_SECRET="your_uploadthing_secret"
     DATABASE_URL="supabase_postgres_db_with_realtime"
     DIRECT_URL="supabase_postgres_direct_url"
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     ```
4. Migrate Prisma Scehmas: `pnpm dlx prisma migrate dev --name migration_name` and then `npx prisma generate`  
5. Run the local server: `pnpm dev`