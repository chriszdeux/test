import { EditFeedbackForm } from "../components/forms/EditFeedbackForm";
import { Home } from "../components/main";
import { FeedbackDetails } from "../components/main/FeedbackDetails";
import { NewFeedback } from "../components/main/NewFeedback";

export const routes = [
  { 
    page: '',
    route: '/',
    component: <Home /> 
  },
  { 
    page: 'New Feedback',
    route: '/add-feedback',
    component: <NewFeedback /> 
  },
  { 
    page: 'Edit Feedback',
    route: '/edit-feedback',
    component: <EditFeedbackForm /> 
  },
  { 
    page: 'Feedback',
    route: '/feedback',
    component: <FeedbackDetails /> 
  },
]