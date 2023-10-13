
import React, { Suspense } from 'react';
import TicketList from './ticketList';
import Loading from '../loading';
import { CreateTicketButton } from './create/createTicketButton';

export default function Tickets() {



  return (
    <main>
        <nav>
          <div>
            <h2>Tickets</h2>
            <p><small>Currently open tickets.</small></p>
          </div>
        </nav>
        <div>
          <CreateTicketButton /> 
        </div>
        <Suspense fallback={<Loading/>}>
          <TicketList/>
        </Suspense>
    </main>
  );
}
