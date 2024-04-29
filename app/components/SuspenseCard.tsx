import { Skeleton } from "@/components/ui/skeleton";

export function SuspenseCard() {
  return (
    <>
      <Skeleton className="w-full h-[250px]" />
      <Skeleton className="w-full h-[250px]" />
      <Skeleton className="w-full h-[250px]" />
      <Skeleton className="w-full h-[250px]" />
      <Skeleton className="w-full h-[250px]" />
    </>
  );
}
