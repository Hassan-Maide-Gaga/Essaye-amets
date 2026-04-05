CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can insert contact messages"
ON public.contact_messages
FOR INSERT
TO service_role
WITH CHECK (true);

CREATE POLICY "Service role can read contact messages"
ON public.contact_messages
FOR SELECT
TO service_role
USING (true);