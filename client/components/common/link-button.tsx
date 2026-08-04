import Link from "next/link";

import { Button } from "@/components/ui/button";

type LinkButtonProps = Omit<React.ComponentProps<typeof Button>, "render"> & {
  href: string;
};

export function LinkButton({ href, children, ...props }: LinkButtonProps) {
  return (
    <Button {...props} nativeButton={false} render={<Link href={href} />}>
      {children}
    </Button>
  );
}
