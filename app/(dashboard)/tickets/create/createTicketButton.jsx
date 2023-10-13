import Link from 'next/link';

export function CreateTicketButton() {
  return (
    <Link href="/tickets/create"> 
      <button className="bg-primary text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-primary-dark">
        Create New Ticket
      </button>
    </Link>
  );
}
