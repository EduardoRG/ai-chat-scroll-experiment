import { useDispatch as useRTDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';

export const useDispatch = useRTDispatch.withTypes<AppDispatch>();
