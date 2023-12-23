import multer from "multer";

const storage: any = multer.memoryStorage();

export default multer({ storage });
