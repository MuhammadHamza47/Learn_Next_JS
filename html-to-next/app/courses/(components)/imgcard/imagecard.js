import Image from "next/image"
export default function ImageCard(props) {
  return (
    <div class="facilities-col">
            <Image
            src={props.source}
            alt="Picture of the author"
            width={300}
            height={200}
          />
                <h3>{props.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio omnis asperiores atque aperiam.
                </p>
            </div>
  )
}
