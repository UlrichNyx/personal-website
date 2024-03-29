// PoemProps
// title: //

export interface PoemProps {
  title: string;
  verses: string;
  index?: number;
}

const extractPoems = async (): Promise<PoemProps[]> => {
  return await fetch('/Poems.txt')
    .then(async (r) => await r.text())
    .then((text) => {
      const p = text.split('-----------------\n'); // Include \n for UNIX
      // console.log(navigator.userAgent.includes('Windows'));
      const poems = [];
      for (let i = 0; i < p.length - 1; i++) {
        

        const lines = p[i].split('\n'); // For windows \r\n for UNIX: \n
        
        const verses = p[i].substring(p[i].indexOf('\n'), p[i].length - 1);
        poems.push({ title: lines[0], verses });
      }

      return poems;
    });
};

export { extractPoems };
