export interface HaikuProps {
  line1: string;
  line2: string;
  line3: string;
}

const extractHaikus = async (): Promise<HaikuProps[]> => {
  return await fetch('/Haikus.txt')
    .then(async (r) => await r.text())
    .then((text) => {
      const lines = text.split('\n');
      const haikus = [];
      for (let i = 0; i < lines.length; i += 4) {
        haikus.push({ line1: lines[i], line2: lines[i + 1], line3: lines[i + 2] });
      }

      return haikus;
    });
};

export { extractHaikus };
