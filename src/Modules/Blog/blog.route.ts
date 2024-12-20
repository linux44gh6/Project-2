import { Router } from "express";
import { BlogController } from "./blog.controller";
import auth from "../../Middlewares/auth";
import { USER_ROLE } from "../User/user.constants";
import validateRequest from "../../Middlewares/validatedRequest";
import { blogValidation } from "./blog.validation";

const router=Router()
router.post('/',auth(USER_ROLE.user),validateRequest(blogValidation.BlogPostValidationSchema),BlogController.createBlog)

router.patch('/:id',auth(USER_ROLE.user),validateRequest(blogValidation.BlogPostUpdateValidationSchema),BlogController.updateBlog)
export const BlogRouter=router