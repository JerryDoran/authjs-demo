import CardWrapper from '@/components/auth/card-wrapper';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

export default function ErrorCard() {
  return (
    <CardWrapper
      headerLabel='Oops! Something went wrong!'
      backButtonHref='/auth/login'
      backButtonLabel='Back to Login'
    >
      <div className='w-full flex justify-center items-center'>
        <ExclamationTriangleIcon className='size-6 text-destructive' />
      </div>
    </CardWrapper>
  );
}
