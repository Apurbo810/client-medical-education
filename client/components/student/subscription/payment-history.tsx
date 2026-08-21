"use client";

import {
  CheckCircle2,
  Clock3,
  Download,
  XCircle,
} from "lucide-react";

import type {
  PaymentRecord,
  PaymentStatus,
} from "@/types/student/subscription";

interface PaymentHistoryProps {
  payments: PaymentRecord[];
  onExport?: () => void;
  onSelectPayment?: (paymentId: string) => void;
}

export function PaymentHistory({
  payments,
  onExport,
  onSelectPayment,
}: PaymentHistoryProps) {
  return (
    <section className="payment-history">
      <div className="payment-history-header">
        <div>
          <h2 className="payment-history-title">
            Payment History
          </h2>

          <p className="payment-history-description">
            View your previous payments and invoices.
          </p>
        </div>

        {payments.length > 0 && (
          <button
            type="button"
            onClick={onExport}
            className="payment-export"
          >
            <Download className="size-4" />
            Export
          </button>
        )}
      </div>

      {payments.length === 0 ? (
        <div className="payment-history-empty">
          <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-muted text-muted-foreground">
            <Clock3 className="size-5" />
          </div>

          <h3 className="payment-history-empty-title">
            No payment history
          </h3>

          <p className="payment-history-empty-description">
            Your completed payments and invoices
            will appear here.
          </p>
        </div>
      ) : (
        <div className="payment-table-wrapper payment-table-scroll">
          <table className="payment-table">
            <thead>
              <tr className="payment-table-head">
                <th className="payment-table-header-cell">
                  Invoice
                </th>

                <th className="payment-table-header-cell">
                  Date
                </th>

                <th className="payment-table-header-cell">
                  Description
                </th>

                <th className="payment-table-header-cell">
                  Amount
                </th>

                <th className="payment-table-header-cell">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <PaymentRow
                  key={payment.id}
                  payment={payment}
                  onSelect={onSelectPayment}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

/* =========================================================
   PAYMENT ROW
========================================================= */

interface PaymentRowProps {
  payment: PaymentRecord;
  onSelect?: (paymentId: string) => void;
}

function PaymentRow({
  payment,
  onSelect,
}: PaymentRowProps) {
  function handleSelect() {
    /*
     * Only expose the opaque payment ID to the
     * selection handler.
     *
     * Sensitive payment details should be loaded
     * from the backend after authorization.
     */
    onSelect?.(payment.id);
  }

  return (
    <tr
      tabIndex={0}
      role="button"
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (
          event.key === "Enter" ||
          event.key === " "
        ) {
          event.preventDefault();
          handleSelect();
        }
      }}
      className="payment-table-row cursor-pointer transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <td className="payment-table-cell">
        <span className="payment-invoice">
          {payment.invoice}
        </span>
      </td>

      <td className="payment-table-cell">
        <span className="payment-date">
          {payment.date}
        </span>
      </td>

      <td className="payment-table-cell">
        <span className="payment-description">
          {payment.description}
        </span>
      </td>

      <td className="payment-table-cell">
        <span className="payment-amount">
          {payment.amount}
        </span>
      </td>

      <td className="payment-table-cell">
        <PaymentStatus status={payment.status} />
      </td>
    </tr>
  );
}

/* =========================================================
   PAYMENT STATUS
========================================================= */

interface PaymentStatusProps {
  status: PaymentStatus;
}

function PaymentStatus({
  status,
}: PaymentStatusProps) {
  if (status === "paid") {
    return (
      <span className="payment-status payment-status-paid">
        <CheckCircle2 className="size-3.5" />
        Paid
      </span>
    );
  }

  if (status === "pending") {
    return (
      <span className="payment-status payment-status-pending">
        <Clock3 className="size-3.5" />
        Pending
      </span>
    );
  }

  return (
    <span className="payment-status payment-status-failed">
      <XCircle className="size-3.5" />
      Failed
    </span>
  );
}