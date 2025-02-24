import { Button } from "@/components/Button";
import { IconButton } from "@/components/Icon-button";
import { ArrowRight,Copy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Button type="submit">
        Enviar
        <ArrowRight />
      </Button>

      <IconButton>
        <Copy/>
      </IconButton>
    </div>
  );
}
