import type { WhyChooseItem as WhyChooseItemType } from "@/types/why-choose-us";

interface WhyChooseItemProps {
  item: WhyChooseItemType;
}

export function WhyChooseItem({
  item,
}: WhyChooseItemProps) {
  const Icon = item.icon;

  return (
    <div className="why-item">
      <div className="why-icon">
        <Icon className="size-6" />
      </div>

      <div>
        <h3 className="why-title">
          {item.title}
        </h3>

        <p className="why-description">
          {item.description}
        </p>
      </div>
    </div>
  );
}