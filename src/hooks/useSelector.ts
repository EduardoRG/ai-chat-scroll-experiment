import { useSelector as useRTSelector } from 'react-redux';
import type { RootState } from '@/store';

export const useSelector = useRTSelector.withTypes<RootState>();
