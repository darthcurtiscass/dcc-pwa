import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (id, content) => {
  const jateDb = await openDB('jate', 1);
  const trans = jateDb.transaction('jate', 'readwrite');
  const store = trans.objectStore('jate');
  const req = store.put({id: id, jate: content});
  const updatedContent = await req;
  console.log('updated and saved to db', updatedContent);
  console.error('putDb not implemented');
  return updatedContent;
} 

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trans = jateDb.transaction('jate', 'readonly');
  const store = trans.objectStore('jate');
  const req = store.put({id: id, jate: content});
  const allContent = await req;
  console.log('allContent.value', allContent)
  console.error('getDb not implemented');
  return allContent;
}

initdb();
