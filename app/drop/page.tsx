import { CountdownStrip } from '@/components/home/countdown-strip';
import { PricePill } from '@/components/home/price-pill';
import { Button } from '@/components/ui/button';
import { drops } from '@/lib/data';

export default function DropPage() {
  const drop = drops[0];

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Drop del giorno</h1>
      <p className="text-sm">100 nuovi pacchi reali disponibili oggi in negozio.</p>
      <CountdownStrip endAt={drop.endAt} />
      <div className="rounded-3xl bg-white p-4 shadow-soft">
        <h2 className="text-xl font-bold">{drop.title}</h2>
        <p className="mb-3 text-sm">{drop.subtitle}</p>
        <PricePill price={drop.price} oldPrice={drop.oldPrice} />
        <p className="mt-3 text-sm">Disponibilità reale: {drop.quantityLeft}/{drop.total}</p>
        <Button className="mt-4 w-full">Prenota ritiro</Button>
      </div>
    </div>
  );
}
