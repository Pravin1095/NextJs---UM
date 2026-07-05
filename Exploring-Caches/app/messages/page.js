import Messages from '@/components/messages';
import { unstable_noStore } from 'next/cache';

export default async function MessagesPage() {
  unstable_noStore() //Disables cache for one component
  const response = await fetch('http://localhost:8080/messages', {headers: {
      'X-ID': 'page',
    },
    cache : 'no-store',
    revalidate : 5
  });
  const messages = await response.json();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
