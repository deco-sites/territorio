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
  url?: string;
  isActive?: boolean;
}

interface CursoCardProps {
  course: Course;
  isMobile: boolean;
}

const TsCursoCard = ({ course, isMobile }: CursoCardProps) => {
  return (
    <a
      href={course.url}
      disabled={!course?.isActive}
      class={clx(
        'flex flex-col items-center',
        course?.isActive ? 'hover:scale-110' : 'pointer-events-none'
      )}
    >
      {!course?.isActive && (
        <div class='absolute w-fit rounded-b-md bg-base-300'>
          <TsTypography
            type='body'
            weight='800'
            class='text-lg sm:text-2xl mx-3 sm:mx-5 sm:my-3'
          >
            BREVE
          </TsTypography>
        </div>
      )}
      <Image
        alt={course.alt}
        src={course.imageSrc}
        width={isMobile ? 250 : 271}
        height={isMobile ? 448 : 486}
        class={clx(isMobile ? 'min-w-[125px]' : '')}
      />
    </a>
  );
};

export default TsCursoCard;
