// Hardcoded base URL pointing to your running backend
const BASE_URL = "http://localhost:5000/api/v1/";

// AUTH ENDPOINTS
export const endpoints = {
  SENDOTP_API: BASE_URL + "auth/sendotp",
  SIGNUP_API: BASE_URL + "auth/signup",
  LOGIN_API: BASE_URL + "auth/login",
  RESETPASSTOKEN_API: BASE_URL + "auth/reset-password-token",
  RESETPASSWORD_API: BASE_URL + "auth/reset-password",
};

// PROFILE ENDPOINTS
export const profileEndpoints = {
  GET_USER_DETAILS_API: BASE_URL + "profile/getUserDetails",
  GET_USER_ENROLLED_COURSES_API: BASE_URL + "profile/getEnrolledCourses",
  GET_INSTRUCTOR_DATA_API: BASE_URL + "profile/instructorDashboard",
};

// STUDENT ENDPOINTS
export const studentEndpoints = {
  COURSE_PAYMENT_API: BASE_URL + "payment/capturePayment",
  COURSE_VERIFY_API: BASE_URL + "payment/verifyPayment",
  SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "payment/sendPaymentSuccessEmail",
};

// COURSE ENDPOINTS (Fixed)
export const courseEndpoints = {
  GET_ALL_COURSE_API: BASE_URL + "course/all", // ✅ Matches: router.get("/all")
  COURSE_DETAILS_API: BASE_URL + "course/details", // use `/details/:courseId` manually
  EDIT_COURSE_API: BASE_URL + "course/edit", // use `/edit/:courseId` manually
  COURSE_CATEGORIES_API: BASE_URL + "category/all", // ✅ category route fixed
  CREATE_COURSE_API: BASE_URL + "course/create", // ✅ Matches
  CREATE_SECTION_API: BASE_URL + "course/section/create",
  CREATE_SUBSECTION_API: BASE_URL + "course/subsection/create",
  UPDATE_SECTION_API: BASE_URL + "course/section/update", // use `/update/:sectionId` manually
  UPDATE_SUBSECTION_API: BASE_URL + "course/subsection/update", // use `/update/:subSectionId` manually
  GET_ALL_INSTRUCTOR_COURSES_API: BASE_URL + "course/instructor/courses", // ✅ Matches
  DELETE_SECTION_API: BASE_URL + "course/section/delete", // use `/delete/:sectionId`
  DELETE_SUBSECTION_API: BASE_URL + "course/subsection/delete", // use `/delete/:subSectionId`
  DELETE_COURSE_API: BASE_URL + "course/delete/:courseId", // use `/delete/:courseId`
  GET_FULL_COURSE_DETAILS_AUTHENTICATED: BASE_URL + "course/details/full", // use `/details/full/:courseId`
  LECTURE_COMPLETION_API: BASE_URL + "course/progress/update", // ✅ Matches
  CREATE_RATING_API: BASE_URL + "course/rating/create", // ✅ Matches
};

// RATINGS AND REVIEWS (Fixed)
export const ratingsEndpoints = {
  REVIEWS_DETAILS_API: BASE_URL + "course/rating/reviews", // ✅ Matches
};

// CATEGORIES API (Fixed)
export const categories = {
  CATEGORIES_API: BASE_URL + "category/all", // ✅ Matches category route
};

// CATALOG PAGE DATA (Fixed)
export const catalogData = {
  CATALOGPAGEDATA_API: BASE_URL + "category/details", // use `/details/:categoryId`
};

// CONTACT-US API
export const contactusEndpoint = {
  CONTACT_US_API: BASE_URL + "reach/contact",
};

// SETTINGS PAGE API
export const settingsEndpoints = {
  UPDATE_DISPLAY_PICTURE_API: BASE_URL + "profile/updateUserProfileImage",
  UPDATE_PROFILE_API: BASE_URL + "profile/updateProfile",
  CHANGE_PASSWORD_API: BASE_URL + "auth/changepassword",
  DELETE_PROFILE_API: BASE_URL + "profile/deleteProfile",
};
