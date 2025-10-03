import { Router, type Request, type Response } from "express";
const router = Router();
router.get("/", (req: Request, res: Response) => {
    return res.json({
      success: true,
      message: "Student Information",
      data: {
            studentId: "670610687",
            firstName: "Narudee",
            lastName: "Sornsawat",
            program: "CPE",
            section: "001",
            }
    });
});
export default router;