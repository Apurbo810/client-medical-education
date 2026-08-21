import { SubscriptionPage } from "@/components/student/subscription/subscription-page";

import {
  paymentHistory,
  subscriptionPlans,
  studentSubscription,
} from "@/data/student-subscription";

export default function StudentSubscriptionPage() {
  return (
    <SubscriptionPage
      subscription={studentSubscription}
      plans={subscriptionPlans}
      payments={paymentHistory}
    />
  );
}