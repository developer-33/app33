
import GunCard from '../GunCard'; // Import the GunCard component





const MoreCards= () => {
  const gunCards = Array.from({ length: 26 }, (_, index) => (
    <GunCard
      key={index}
      gunName={`Gun ${index + 1}`}
      gunClass="Assault"
      imagePath={`/ASM10.png ${index + 1}.PNG`}
      description={`Description for Gun ${index + 1}`}
    />
  ));

  return <div>{gunCards}</div>;
};






export default MoreCards;