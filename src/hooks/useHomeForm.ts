import { FormEvent, useRef, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const useHomeForm = () => {
  const [newLink, setNewLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const linkRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [toggles, setToggles] = useState({
    isPassAreaOpen: false,
    isShowPassValue: false,
  });

  const changeToggleByName = (name: keyof typeof toggles) => {
    setToggles((pv) => ({
      ...pv,
      [name]: !pv[name],
    }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const link = linkRef.current?.value;
    const password = passRef.current?.value;

    if (!link) {
      toast.error('Link connot be empty');
      return;
    }

    try {
      const { data } = await axios.post('/api/link', {
        link,
        password,
      });
      setNewLink(() => data.id);
    } catch (error: any) {
      toast.error('Invalid link');
      console.error('Invalid link');
    }
    setIsLoading(false);
  };

  const closeModal = () => {
    setNewLink(() => '');
  };

  return {
    linkRef,
    passRef,
    toggles,
    newLink,
    isLoading,
    closeModal,
    changeToggleByName,
    submit,
  };
};

export default useHomeForm;
