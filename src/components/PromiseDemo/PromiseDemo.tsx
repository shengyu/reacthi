import React, { useEffect } from 'react';

export default function PromiseDemo() {
  const addOne = (x: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        console.log(`I added one! Now it's ${x + 1}.`);
        resolve();
      }, 2000 + x * 100);
    });
  };

  async function addAsync() {
    console.log('addAsync - I have 20');
    await addOne(20);
    console.log(`addAsync - Now I'm done!`);
  }

  async function addAsync2() {
    console.log('addAsync2 - I have 10');
    await addOne(10);
    console.log(`addAsync2 - Now I'm done!`);
  }

  async function getId() {
    console.log('getId');
    let id: string = await getIdFromWeb();
    console.log('getId ' + id);
  }

  async function getIdFromWeb(): Promise<string> {
    console.log('getIdFromWeb');
    return 'myId';
  }

  useEffect(() => {
    getId();
    console.log('getId done');
  });

  return (
    <div>
      <div>Promise Demo</div>
    </div>
  );
}
