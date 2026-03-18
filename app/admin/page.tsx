import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-black">Admin Dashboard</h1>
      <Card className="space-y-3">
        <h2 className="font-bold">Gestione drop</h2>
        <Input placeholder="Titolo drop" />
        <Input type="datetime-local" aria-label="Ora inizio" />
        <Input type="datetime-local" aria-label="Ora fine" />
        <Button>Salva drop</Button>
      </Card>
      <Card className="space-y-3">
        <h2 className="font-bold">Accredito punti manuale</h2>
        <Input placeholder="Cerca utente email" />
        <Input type="number" placeholder="Punti da aggiungere" />
        <Button variant="secondary">Accredita punti</Button>
      </Card>
      <Card>
        <h2 className="font-bold">Export base CSV</h2>
        <Button variant="ghost">Scarica export</Button>
      </Card>
    </div>
  );
}
