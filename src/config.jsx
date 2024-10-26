// Config for the form fields and base URL
import TextInput from "./Components/TextInput";
import PhoneInput from "./Components/PhoneInput";
import EmailInput from "./Components/EmailInput";
import AddressInput from "./Components/AddressInput";
import DateInput from "./Components/DateInput";
import UrlInput from "./Components/UrlInput";
import NoteInput from "./Components/NoteInput";

// Define the base URL for the generated links
export const baseUrl = "https://tarvergrant.com/generate-vcard/";

// Define the list of input fields (VCF typical fields)
export const inputOptions = [
  { id: "fullName", label: "Full Name", component: TextInput },
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
];
