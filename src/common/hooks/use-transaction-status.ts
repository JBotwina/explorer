import React, { useEffect, useState } from 'react';
import { MempoolTransaction, Transaction } from '@stacks/stacks-blockchain-api-types';
import { TxStatus } from '@common/types/tx';
import { TransactionStatus } from '@common/constants';

export const useTransactionStatus = (
  tx: Transaction | MempoolTransaction | undefined
): TxStatus | undefined => {
  const [txStatus, setTxStatus] = useState<TxStatus>();

  useEffect(() => {
    if (tx?.tx_status === 'success' && !!tx.is_unanchored) {
      setTxStatus(TransactionStatus.SUCCESS_MICROBLOCK);
    } else if (tx?.tx_status === 'success' && !tx.is_unanchored) {
      setTxStatus(TransactionStatus.SUCCESS_ANCHOR_BLOCK);
    } else if (tx?.tx_status === 'success' && !tx.microblock_canonical) {
      setTxStatus(TransactionStatus.ORPHANED_MICROBLOCK);
    } else {
      setTxStatus(tx?.tx_status);
    }
  });

  return txStatus;
};
