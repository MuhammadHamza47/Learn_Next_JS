import Image from "next/image";
export default function CampusImage(props) {
  return (
    <div class="campus-col">
      <Image src={props.source} width={200} height={220} alt="" />
      <div class="layer">
        <h3>DELHI</h3>
      </div>
    </div>
  );
}
