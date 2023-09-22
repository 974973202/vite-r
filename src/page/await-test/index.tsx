import { useEffect } from 'react';

let processor: any;
// function processTasks(tasks: Promise<any>[]) {
//   let isRunning = false; // 判断是否继续执行的状态
//   const result: any[] = []; // 存储执行结果
//   let prom: Promise<unknown> | null = null;
//   let i = 0; // 用于判断执行到第几个，便于继续执行

//   return {
//     start() {
//       return new Promise(async (resolve, reject) => {
//         if (prom) {
//           console.log(prom, 'promprom');

//           prom.then(resolve, reject);
//           return;
//         }
//         if (isRunning) return;
//         isRunning = true;
//         while (i < tasks.length) {
//           try {
//             console.log(i, '执行中');
//             result.push(await tasks[i]());
//             console.log(i, '执行完成');
//           } catch (error) {
//             isRunning = false;
//             reject(error);
//             prom = Promise.reject(error);
//             return;
//           }

//           i++;

//           if (!isRunning && i < tasks.length) {
//             console.log('执行中断');
//             return;
//           }
//         }
//         console.log('全部执行完成');
//         isRunning = false;
//         resolve(result);
//         prom = Promise.resolve(result);
//       });
//     },
//     stop() {
//       isRunning = false;
//     },
//   };
// }

function AwaitTest() {
  // useEffect(() => {
  //   const tasks = [];
  //   // 生成几个异步函数
  //   for (let i = 0; i < 5; i++) {
  //     tasks.push(
  //       () =>
  //         new Promise(resolve =>
  //           setTimeout(() => {
  //             resolve(i);
  //           }, 1000)
  //         )
  //     );
  //   }
  //   processor = processTasks(tasks);
  // }, []);

  return (
    <div>
      <button
        onClick={async () => {
          const results = await processor.start();
          console.log('任务执行完成', results);
        }}
      >
        开始任务
      </button>
      <button
        onClick={() => {
          console.log('点击暂停');
          processor.stop();
        }}
      >
        暂停任务
      </button>
    </div>
  );
}

export default AwaitTest;
