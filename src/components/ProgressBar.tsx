import * as Progress from "@radix-ui/react-progress";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBarIndicator(props: ProgressBarProps) {
  return (
    <Progress.Root className="bg-zinc-700 rounded-xl w-full h-3 mt-4">
      <Progress.ProgressIndicator
        aria-valuenow={props.progress}
        className="bg-violet-600 h-3 rounded-xl"
        style={{ width: `${props.progress}%` }}
      />
    </Progress.Root>
  );
}
