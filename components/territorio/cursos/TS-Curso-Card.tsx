import type { ImageWidget } from 'apps/admin/widgets.ts';
import Image from 'apps/website/components/Image.tsx';
import { clx } from '../../../sdk/clx.ts';
import TsTypography from '../typography/TS-Typography.tsx';

/**
 * @title Curso
 */
export interface Course {
  id: number;
  imageSrc: ImageWidget;
  alt: string;
  url: string;
  isActive?: boolean;
}

const TsCursoCard = ({ course }: { course: Course }) => {
  return (
    <a
      href={course.url}
      disabled={!course?.isActive}
      class={clx(
        'flex flex-col items-center hover:transition-all',
        course?.isActive ? 'hover:scale-110' : 'pointer-events-none'
      )}
    >
      {!course?.isActive && (
        <div class='absolute w-fit rounded-b-md bg-base-300'>
          <TsTypography type='body' weight='800' class='text-2xl mx-5 my-3'>
            BREVE
          </TsTypography>
        </div>
      )}
      <Image src={course.imageSrc} width={271} height={486} alt={course.alt} />
    </a>
  );
};

export default TsCursoCard;
