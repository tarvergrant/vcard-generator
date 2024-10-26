// Config for the form fields and base URL
import TextInput from "./Components/TextInput";
import PhoneInput from "./Components/PhoneInput";
import EmailInput from "./Components/EmailInput";
import AddressInput from "./Components/AddressInput";
import DateInput from "./Components/DateInput";
import UrlInput from "./Components/UrlInput";
import NoteInput from "./Components/NoteInput";


// Define the list of input fields (VCF typical fields)
export const inputOptions = [
  { id: "firstName", label: "First Name", component: TextInput },
  { id: "lastName", label: "Last Name", component: TextInput },
  { id: "organization", label: "Organization", component: TextInput },
  { id: "title", label: "Title", component: TextInput },
  { id: "workPhone", label: "Work Phone", component: PhoneInput },
  { id: "mobilePhone", label: "Mobile Phone", component: PhoneInput },
  { id: "homePhone", label: "Home Phone", component: PhoneInput },
  { id: "workEmail", label: "Work Email", component: EmailInput },
  { id: "personalEmail", label: "Personal Email", component: EmailInput },
  { id: "workAddress", label: "Work Address", component: AddressInput },
  { id: "homeAddress", label: "Home Address", component: AddressInput },
  { id: "birthday", label: "Birthday", component: DateInput },
  { id: "website", label: "Website", component: UrlInput },
  { id: "notes", label: "Notes", component: NoteInput },

  // New fields for image URL and social media profiles
  { id: "imageUrl", label: "Image URL", component: UrlInput },
  { id: "twitter", label: "Twitter", component: UrlInput },
  { id: "facebook", label: "Facebook", component: UrlInput },
  { id: "linkedin", label: "LinkedIn", component: UrlInput },
  { id: "instagram", label: "Instagram", component: UrlInput },
];