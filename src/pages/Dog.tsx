import { useEffect, useState } from 'react';

const Dog = ({
  initialData,
}: {
  initialData: { message?: string; status?: string };
}) => {
  const [dogUrl, setDogUrl] = useState<string>(initialData?.message || '');

  // CSRで遷移したときの処理
  useEffect(() => {
    if (!initialData.message) {
      const fetchDog = async () => {
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        setDogUrl(data.message);
      };
      fetchDog();
    }
  }, [initialData.message]);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">犬の画像</h1>
      {dogUrl && <img src={dogUrl} alt="犬の画像" className="rounded-sm" />}
    </div>
  );
};

export default Dog;
