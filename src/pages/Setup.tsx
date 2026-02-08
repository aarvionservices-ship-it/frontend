import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Lock, Mail, User } from 'lucide-react';

const Setup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [setupError, setSetupError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: any) => {
        setSetupError('');
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...data, role: 'super-admin' }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Setup failed');
            }

            // Redirect to login after successful creation
            navigate('/login');

        } catch (error: any) {
            setSetupError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Setup Super Admin | Aarvion Services</title>
            </Helmet>
            <main className="pt-20 min-h-screen flex items-center justify-center bg-surface">
                <div className="w-full max-w-md p-8 bg-background rounded-2xl border border-border shadow-xl">
                    <h1 className="text-3xl font-bold text-text mb-6 text-center">Setup Super Admin</h1>

                    {setupError && (
                        <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-6 text-sm">
                            {setupError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-text-muted" size={20} />
                                <input
                                    {...register('name', { required: 'Name is required' })}
                                    type="text"
                                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name.message as string}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-text-muted" size={20} />
                                <input
                                    {...register('email', { required: 'Email is required' })}
                                    type="email"
                                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email.message as string}</span>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-text-muted mb-2">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-text-muted" size={20} />
                                <input
                                    {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                                    type="password"
                                    className="w-full bg-surface border border-border rounded-lg pl-10 pr-4 py-3 text-text focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Create a strong password"
                                />
                            </div>
                            {errors.password && <span className="text-red-500 text-xs mt-1">{errors.password.message as string}</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary py-3 rounded-lg font-bold text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Creating Admin...' : 'Create Super Admin'}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Setup;
