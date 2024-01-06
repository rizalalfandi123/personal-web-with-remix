import * as Tooltip from "~/components/core/tooltip";

interface QuickTooltipProps extends React.PropsWithChildren {
  content: React.ReactNode;
}

const QuickTooltip = ({ content, children }: QuickTooltipProps) => (
  <Tooltip.Root>
    <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
    <Tooltip.Positioner>
      <Tooltip.Arrow>
        <Tooltip.ArrowTip />
      </Tooltip.Arrow>
      <Tooltip.Content>{content}</Tooltip.Content>
    </Tooltip.Positioner>
  </Tooltip.Root>
);

export default QuickTooltip;
