export function PricePill({ price, oldPrice }: { price: number; oldPrice?: number }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-brand-navy shadow-soft" aria-label={`Prezzo ${price} euro`}>
      <span className="text-3xl font-black">€{price}</span>
      {oldPrice ? <span className="text-sm font-semibold line-through opacity-70">€{oldPrice}</span> : null}
    </div>
  );
}
