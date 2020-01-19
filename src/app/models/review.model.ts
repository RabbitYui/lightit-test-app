
export class Review {
    id: number;
    product: number;
    createdBy: object;
    rate: number;
    text: string;
    createdAt: Date;

    constructor(review: any) {
        this.id = review.id || 0;
        this.product = review.product || 0;
        this.createdBy = review.created_by || {};
        this.rate = review.rate || 0;
        this.text = review.text || '';
        this.createdAt = new Date(review.created_at);
    }
}
