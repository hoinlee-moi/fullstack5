import { upperCap } from '@/app/_lib/utils';

export default function HelloTimePage({
  params,
}: {
  params: { time: string };
}) {
  return <div>Good {upperCap(params.time)}!</div>;
}
