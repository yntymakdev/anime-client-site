import { axiosWithAuth } from "@/api/interceptors";

import { API_URL } from "@/config/api.config";

import { IPayment, IPaymentResponse } from "@/types/payment.types";

class PaymentService {
  async getAll() {
    const { data } = await axiosWithAuth.get<IPayment[]>(API_URL.payment(""));

    return data;
  }

  async checkout(amount: number) {
    return axiosWithAuth.post<IPaymentResponse>(API_URL.payment(""), {
      amount,
    });
  }

  async delete(id: string) {
    return axiosWithAuth.delete<string>(API_URL.payment(`/${id}`));
  }
}

export const paymentService = new PaymentService();
