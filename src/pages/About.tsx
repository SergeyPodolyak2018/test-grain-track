import { TAboutData } from '../definitions/about';

export function AboutComponent(props: { data: TAboutData }) {
  return (
    <div className='p-2'>
      <div>Hellow from About</div>
      <div className='h-2' />
      {props.data &&
        Object.keys(props.data).map((el) => (
          <div key={el}>
            <span>{el}</span>
            <span>{props.data[el as keyof typeof props.data]}</span>
          </div>
        ))}
    </div>
  );
}
