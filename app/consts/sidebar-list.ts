import { FileText, Newspaper, Phone, User } from "lucide-react";
import { type NavigationItemProps } from "~/components/navigations/navigation-item";

const sidebarList: Array<NavigationItemProps> = [
  { icon: User, label: "About Me", to: "/" },
  { icon: Newspaper, label: "Blog", to: "/blog" },
  { icon: FileText, label: "Cerificates", to: "/certificates" },
  { icon: Phone, label: "Contacts", to: "/contacts" },
];

export default sidebarList;
