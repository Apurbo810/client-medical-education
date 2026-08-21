import { SupportPage } from "@/components/student/support/support-page";

import { supportFaqs } from "@/data/support-faqs";

export default function StudentSupportPage() {
  return (
    <SupportPage faqs={supportFaqs} />
  );
}