import { TransactionMessage } from '../transaction-message';
import { setTransactionMessageConfig, V1TransactionConfig } from '../v1-transaction-config';

type LegacyTransactionMessage = Extract<TransactionMessage, { version: 'legacy' }>;
type V0TransactionMessage = Extract<TransactionMessage, { version: 0 }>;
type V1TransactionMessage = Extract<TransactionMessage, { version: 1 }>;

// [DESCRIBE] setTransactionMessageConfig
{
    const mockConfig = null as unknown as V1TransactionConfig;

    // It accepts v1 messages
    {
        const message = null as unknown as V1TransactionMessage;
        const result = setTransactionMessageConfig(mockConfig, message);
        result satisfies V1TransactionMessage;
    }

    // It preserves input message type
    {
        const message = null as unknown as V1TransactionMessage & { some: 1 };
        const result = setTransactionMessageConfig(mockConfig, message);
        result satisfies V1TransactionMessage & { some: 1 };
    }

    // It rejects legacy messages
    {
        const message = null as unknown as LegacyTransactionMessage;
        // @ts-expect-error Legacy transactions are not supported
        setTransactionMessageConfig(mockConfig, message);
    }

    // It rejects v0 messages
    {
        const message = null as unknown as V0TransactionMessage;
        // @ts-expect-error V0 transactions are not supported
        setTransactionMessageConfig(mockConfig, message);
    }
}
