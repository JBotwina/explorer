import { useAtomValue } from 'jotai/utils';
import {
  blockInViewState,
  contractInfoInViewState,
  contractInterfaceInViewState,
  contractSourceInViewState,
  transactionInViewState,
  transactionTypeInViewState,
} from '@store/app';
import { transactionSingleState } from '@store/transactions';

export function useTransactionInView() {
  return useAtomValue(transactionInViewState);
}

export function useTransaction(txid: string) {
  return useAtomValue(transactionSingleState(txid));
}

export function useTransactionTypeInView() {
  return useAtomValue(transactionTypeInViewState);
}

export function useBlockInView() {
  return useAtomValue(blockInViewState);
}

export function useContractSourceInView() {
  return useAtomValue(contractSourceInViewState);
}

export function useContractInterfaceInView() {
  return useAtomValue(contractInterfaceInViewState);
}

export function useContractInfoInView() {
  return useAtomValue(contractInfoInViewState);
}
