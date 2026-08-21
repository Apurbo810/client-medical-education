import { ProfilePage } from "@/components/student/profile/profile-page";
import { studentProfile } from "@/data/student-profile";
import { studentSubscription } from "@/data/student-subscription";
import { Section } from "@/components/common/section";

export default function StudentProfilePage() {
  return (
    <Section spacing="none">
      <ProfilePage
        profile={studentProfile}
        subscription={studentSubscription}
      />
    </Section>
  );
}