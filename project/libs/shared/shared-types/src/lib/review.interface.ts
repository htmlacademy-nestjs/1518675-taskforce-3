export interface Review {
  reviewId?: number;
  text: string;
  completeValue: boolean;
  rating: number;
  createdAt: Date;
  user: string;
  userId: number;
}
